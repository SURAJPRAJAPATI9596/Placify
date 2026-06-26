import React, { useEffect, useRef, useState } from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  X,
  User,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Monitor,
} from "lucide-react";
import { Bot as Robot } from "lucide-react";

/**
 * AIInterviewRoom
 * - Single-file React component using Tailwind CSS and lucide-react icons.
 * - Requirements implemented per user's specification.
 *
 * Usage:
 *  - Add Tailwind CSS to your project.
 *  - Install lucide-react: npm i lucide-react
 *  - Import and render <AIInterviewRoom /> in your app.
 */

export default function AIInterviewRoom() {
  // Setup / interview state
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [cameraPermission, setCameraPermission] = useState("unknown"); // 'granted' | 'denied' | 'prompt' | 'unknown'
  const [micPermission, setMicPermission] = useState("unknown");
  const [isTestingDevices, setIsTestingDevices] = useState(false);

  // Interview configuration
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [interviewType, setInterviewType] = useState("Technical Round");

  // Media stream & controls
  const videoRef = useRef(null); // candidate live feed
  const testVideoRef = useRef(null); // preview during device test
  const streamRef = useRef(null); // active stream during interview
  const testStreamRef = useRef(null); // test stream
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  // container for fullscreen
  const containerRef = useRef(null);

  // Save previous body overflow to restore after interview
  const prevOverflowRef = useRef("");

  // Simulated current question (in real app you'd fetch from AI backend)
  const [currentQuestion, setCurrentQuestion] = useState(
    "Tell me about a challenging technical problem you solved.",
  );

  // Simple permission checks using Permissions API with fallback attempt
  useEffect(() => {
    let mounted = true;

    async function queryPermissions() {
      // Helper for permission query with fallback
      async function query(name) {
        try {
          // Some browsers may not support 'camera' or 'microphone' in Permissions API
          // So we try to query, but fallback to 'unknown' and rely on getUserMedia.
          // Note: calling getUserMedia will prompt user which we want to avoid here.
          // So this is a best-effort probe.
          // eslint-disable-next-line no-undef
          const status = await navigator.permissions.query({ name });
          return status.state; // 'granted'|'denied'|'prompt'
        } catch (e) {
          return "unknown";
        }
      }

      const cam = await query("camera");
      const mic = await query("microphone");

      if (!mounted) return;

      setCameraPermission(cam);
      setMicPermission(mic);
    }

    queryPermissions();

    return () => {
      mounted = false;
    };
  }, []);

  // Cleanup streams on unmount
  useEffect(() => {
    return () => {
      stopStream(testStreamRef.current);
      stopStream(streamRef.current);
      restoreScrolling();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Utility to stop all tracks in a stream
  function stopStream(stream) {
    if (!stream) return;
    try {
      const tracks = stream.getTracks ? stream.getTracks() : [];
      tracks.forEach((t) => t.stop && t.stop());
    } catch (e) {
      // ignore
    }
  }

  // Test camera & microphone: open a temporary preview and set permission statuses if resolved
  async function handleTestDevices() {
    setIsTestingDevices(true);

    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 360 },
        audio: true,
      });

      // attach to test preview
      testStreamRef.current = s;
      if (testVideoRef.current) {
        testVideoRef.current.srcObject = s;
      }

      // update permission states
      setCameraPermission("granted");
      setMicPermission("granted");
    } catch (err) {
      // If permission denied or no devices
      // Map to denied/prompt based on error
      if (err && err.name === "NotAllowedError") {
        setCameraPermission("denied");
        setMicPermission("denied");
      } else {
        // unknown or device not found
        if (err && err.name === "NotFoundError") {
          // no device
          setCameraPermission("denied");
        }
      }
    }
  }

  function closeTestDevices() {
    setIsTestingDevices(false);
    stopStream(testStreamRef.current);
    if (testVideoRef.current) {
      testVideoRef.current.srcObject = null;
    }
    testStreamRef.current = null;
  }

  // Start the interview: request media, request fullscreen, lock scrolling
  async function startInterview() {
    try {
      // Request both audio & video
      const s = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720, frameRate: 30 },
        audio: true,
      });

      streamRef.current = s;
      if (videoRef.current) {
        videoRef.current.srcObject = s;
      }

      setCameraOn(Boolean(s.getVideoTracks().length));
      setMicOn(Boolean(s.getAudioTracks().length));

      // Request fullscreen on the container
      if (containerRef.current && containerRef.current.requestFullscreen) {
        try {
          await containerRef.current.requestFullscreen({
            navigationUI: "hide",
          });
        } catch (err) {
          // some browsers may reject - still proceed with overlay/full-screen-like behavior
        }
      }

      // Lock scrolling & hide overflow
      prevOverflowRef.current = document.documentElement.style.overflow || "";
      document.documentElement.style.overflow = "hidden";

      setIsInterviewActive(true);

      // Update permission states to granted (we have the stream)
      setCameraPermission("granted");
      setMicPermission("granted");
    } catch (err) {
      // Could not get media; reflect permission states
      if (err && err.name === "NotAllowedError") {
        setCameraPermission("denied");
        setMicPermission("denied");
      } else {
        setCameraPermission((p) => (p === "unknown" ? "prompt" : p));
      }
      console.error("Failed to start interview:", err);
    }
  }

  // Exit interview: stop streams, exit fullscreen, restore scrolling, and go back to setup
  async function exitInterview() {
    try {
      // Stop tracks
      stopStream(streamRef.current);
      streamRef.current = null;

      // Remove video src
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }

      // Exit fullscreen if active
      if (document.fullscreenElement) {
        try {
          await document.exitFullscreen();
        } catch (e) {
          // ignore
        }
      }

      restoreScrolling();
    } finally {
      setIsInterviewActive(false);
      // Optionally reset camera/mic toggles
      setCameraOn(true);
      setMicOn(true);
    }
  }

  function restoreScrolling() {
    document.documentElement.style.overflow = prevOverflowRef.current || "";
  }

  // Toggle camera: enable/disable video tracks. If no tracks and turning on, request stream.
  async function toggleCamera() {
    if (streamRef.current) {
      const vtracks = streamRef.current.getVideoTracks();
      if (vtracks.length) {
        const enabled = !vtracks[0].enabled;
        vtracks.forEach((t) => (t.enabled = enabled));
        setCameraOn(enabled);
        return;
      }
    }

    // No stream or no video tracks: request video
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true });
      // merge audio if we already have audio from existing stream
      if (streamRef.current) {
        // add new video tracks to existing stream
        s.getVideoTracks().forEach((t) => streamRef.current.addTrack(t));
        // reflect in video element
        if (videoRef.current) videoRef.current.srcObject = streamRef.current;
        setCameraOn(true);
      } else {
        // attach to new stream
        streamRef.current = s;
        if (videoRef.current) videoRef.current.srcObject = s;
        setCameraOn(true);
      }
    } catch (err) {
      console.error("Cannot enable camera:", err);
      setCameraPermission("denied");
    }
  }

  // Toggle mic: enable/disable audio tracks
  async function toggleMic() {
    if (streamRef.current) {
      const atracks = streamRef.current.getAudioTracks();
      if (atracks.length) {
        const enabled = !atracks[0].enabled;
        atracks.forEach((t) => (t.enabled = enabled));
        setMicOn(enabled);
        return;
      }
    }

    // No audio; request audio
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (streamRef.current) {
        s.getAudioTracks().forEach((t) => streamRef.current.addTrack(t));
        setMicOn(true);
      } else {
        streamRef.current = s;
        if (videoRef.current) videoRef.current.srcObject = s;
        setMicOn(true);
      }
    } catch (err) {
      console.error("Cannot enable mic:", err);
      setMicPermission("denied");
    }
  }

  // Simple permission indicator component
  function PermissionIndicator({ name, status }) {
    const isReady = status === "granted";
    const isDenied = status === "denied";
    return (
      <div className="flex items-center space-x-3">
        <div
          className={`w-3 h-3 rounded-full ${
            isReady
              ? "bg-emerald-400/90 ring-2 ring-emerald-400/30"
              : isDenied
                ? "bg-rose-500/90"
                : "bg-yellow-400/80"
          }`}
          aria-hidden
        />
        <div className="text-sm">
          <div className="font-medium">{name}</div>
          <div className="text-xs text-slate-400">
            {isReady ? "Ready" : isDenied ? "Not ready" : "Not granted"}
          </div>
        </div>
      </div>
    );
  }

  // Small UI helper: button disabled styling
  const disabledBtnClass =
    "opacity-50 cursor-not-allowed bg-slate-700 text-slate-300";

  return (
    <div ref={containerRef} className="relative">
      {/* Setup Screen */}
      {!isInterviewActive && (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-800 text-slate-100 p-8">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 w-12 h-12 flex items-center justify-center shadow-lg">
                <Robot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">AI Interview Room</h1>
                <p className="text-sm text-slate-400">
                  Professional AI-powered interview environment
                </p>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              Ready for the interview
            </div>
          </header>

          <main className="grid grid-cols-12 gap-6">
            {/* Device Check */}
            <section className="col-span-7 bg-black/40 backdrop-blur-sm border border-white/6 rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-medium mb-4">Device Check</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <PermissionIndicator
                    name="Camera"
                    status={cameraPermission}
                  />
                  <PermissionIndicator
                    name="Microphone"
                    status={micPermission}
                  />

                  <div className="mt-2">
                    <button
                      onClick={handleTestDevices}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition"
                    >
                      <Monitor className="w-4 h-4" />
                      <span>Test Camera & Microphone</span>
                      <ChevronDown className="w-4 h-4 opacity-60" />
                    </button>
                    <span className="ml-3 text-xs text-slate-400">
                      Run a quick preview to confirm audio & video.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-stretch">
                  <div className="flex-1 rounded-xl bg-white/6 p-3 flex items-center justify-center">
                    {/* Small preview area for test */}
                    {isTestingDevices ? (
                      <div className="w-full">
                        <video
                          ref={testVideoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full rounded-md border border-white/10"
                        />
                        <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
                          <span>Preview active</span>
                          <button
                            onClick={closeTestDevices}
                            className="text-xs px-2 py-1 rounded bg-slate-700/60 hover:bg-slate-700/50 transition"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-slate-400">
                        <div className="text-sm">No preview running</div>
                        <div className="text-xs mt-2">
                          Click "Test Camera & Microphone" to preview devices.
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 text-xs text-slate-400">
                    Pro tip: Grant camera permission in your browser prompt. The
                    Start Interview button will be enabled once camera access is
                    granted.
                  </div>
                </div>
              </div>
            </section>

            {/* Interview Configuration */}
            <aside className="col-span-5 bg-black/40 backdrop-blur-sm border border-white/6 rounded-2xl p-6 shadow-lg flex flex-col">
              <h2 className="text-lg font-medium mb-4">
                Interview Configuration
              </h2>

              <label className="text-xs text-slate-400 mb-2">Target role</label>
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g., Senior Frontend Engineer"
                className="mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/6 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <label className="text-xs text-slate-400 mb-2">
                Company name
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g., Acme Corp"
                className="mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/6 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <label className="text-xs text-slate-400 mb-2">
                Interview type
              </label>
              <div className="relative">
                <select
                  value={interviewType}
                  onChange={(e) => setInterviewType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/6 text-sm focus:outline-none"
                >
                  <option>HR Round</option>
                  <option>Technical Round</option>
                  <option>Coding Round</option>
                  <option>System Design Round</option>
                </select>
                <div className="absolute right-3 top-3 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-auto pt-6">
                <button
                  onClick={startInterview}
                  disabled={cameraPermission !== "granted"}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition
                    ${
                      cameraPermission === "granted"
                        ? "bg-emerald-500 hover:bg-emerald-400"
                        : "bg-slate-700 cursor-not-allowed opacity-60"
                    }
                  `}
                  title={
                    cameraPermission !== "granted"
                      ? "Enable camera permission to start the interview"
                      : "Start Interview"
                  }
                >
                  <Phone className="w-4 h-4" />
                  <span>Start Interview</span>
                </button>
                <div className="mt-3 text-xs text-slate-400">
                  Your interview will launch in fullscreen for a professional
                  experience.
                </div>
              </div>
            </aside>
          </main>
        </div>
      )}

      {/* Interview Fullscreen Mode */}
      {isInterviewActive && (
        <div className="fixed inset-0 bg-slate-900 text-slate-100 z-50 flex">
          {/* Left: AI Interviewer Panel */}
          <div className="w-2/3 p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
                  <Robot className="w-9 h-9 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold">AI Recruiter</div>
                  <div className="text-sm text-slate-400">
                    {interviewType} · {company || "Company"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-xs text-slate-400">Role:</div>
                <div className="px-3 py-1 rounded-md bg-white/6 text-sm">
                  {role || "Candidate"}
                </div>

                <button
                  onClick={exitInterview}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-rose-600 hover:bg-rose-500 transition"
                >
                  <X className="w-4 h-4" />
                  Exit
                </button>
              </div>
            </div>

            <div className="flex-1 rounded-2xl bg-gradient-to-b from-black/50 to-black/30 border border-white/8 p-8 shadow-2xl relative overflow-hidden">
              {/* Glassmorphism card */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/3 via-transparent to-transparent pointer-events-none" />

              <div className="flex gap-8 h-full">
                {/* AI Panel */}
                <div className="w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-6">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-2xl border-2 border-white/6">
                      <Robot className="w-14 h-14 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-semibold">
                          Alexa Recruiter
                        </div>
                        <div className="text-xs text-slate-400 px-3 py-1 rounded-md bg-white/5">
                          AI Interviewer
                        </div>
                      </div>
                      <div className="mt-4 text-slate-300 text-sm leading-relaxed">
                        <div className="mb-2 text-slate-400">
                          Current question
                        </div>
                        <div className="text-lg font-medium">
                          {currentQuestion}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/3">
                      <div
                        className={`w-2 h-2 rounded-full ${micOn ? "bg-emerald-400 animate-pulse" : "bg-rose-500"}`}
                      />
                      <div className="text-xs text-slate-300">
                        {micOn ? "Listening" : "Muted"}
                      </div>
                    </div>

                    <div className="mt-6 text-sm text-slate-400">
                      The AI interviewer listens and evaluates your verbal
                      responses. Speak clearly — the system will provide
                      guidance after each answer.
                    </div>
                  </div>
                </div>

                {/* Right side (small card inside left area for context) */}
                <div className="w-1/3 flex flex-col justify-center items-center">
                  <div className="w-full rounded-xl bg-white/4 border border-white/6 p-4 text-center">
                    <div className="text-sm text-slate-300">
                      Interview progress
                    </div>
                    <div className="mt-3">
                      <div className="w-full h-3 bg-white/6 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-1/3 transition-all" />
                      </div>
                      <div className="mt-2 text-xs text-slate-400">
                        Question 2 of 10
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-slate-400">
                      Tip: Keep answers concise and structured.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Candidate Camera Feed */}
          <div className="w-1/3 p-8 flex flex-col items-center gap-6 border-l border-white/6 bg-gradient-to-t from-black/40 to-black/20">
            <div className="w-full rounded-xl bg-white/4 border border-white/6 p-4 flex flex-col items-center">
              <div className="w-full flex justify-between items-start">
                <div>
                  <div className="text-sm text-slate-400">Your camera</div>
                  <div className="text-xs text-slate-500">Live preview</div>
                </div>
                <div className="text-xs text-slate-400">
                  {micOn ? "Mic on" : "Mic off"}
                </div>
              </div>

              <div className="mt-4 w-full aspect-video rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                {/* video feed or fallback avatar */}
                {streamRef.current ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : cameraOn ? (
                  // If camera expected on but stream not attached (rare), show spinner
                  <div className="text-slate-400">Connecting camera…</div>
                ) : (
                  <div className="flex flex-col items-center text-slate-400">
                    <div className="rounded-full bg-slate-700 w-24 h-24 flex items-center justify-center mb-3">
                      <User className="w-10 h-10 text-white/80" />
                    </div>
                    <div className="text-sm">Camera unavailable</div>
                    <div className="text-xs mt-1 text-slate-500">
                      You can enable your camera in the controls
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full mt-4 flex items-center justify-between text-xs text-slate-400">
                <div>Auto-focus: On</div>
                <div>Resolution: 720p</div>
              </div>
            </div>

            {/* Controls Card */}
            <div className="w-full rounded-xl bg-white/4 border border-white/6 p-4 flex items-center justify-between">
              <div className="text-sm text-slate-300">Session controls</div>
              <div className="text-xs text-slate-400">
                Professional mode enabled
              </div>
            </div>
          </div>

          {/* Bottom Floating Controls */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex items-center gap-4">
            <button
              onClick={toggleMic}
              className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-xl transition ${
                micOn
                  ? "bg-white/6 hover:bg-white/10"
                  : "bg-rose-600 hover:bg-rose-500"
              }`}
              title={micOn ? "Mute microphone" : "Unmute microphone"}
            >
              {micOn ? (
                <Mic className="w-5 h-5" />
              ) : (
                <MicOff className="w-5 h-5" />
              )}
              <span className="text-sm hidden md:inline">
                {micOn ? "Mic on" : "Mic off"}
              </span>
            </button>

            <button
              onClick={toggleCamera}
              className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-xl transition ${
                cameraOn
                  ? "bg-white/6 hover:bg-white/10"
                  : "bg-rose-600 hover:bg-rose-500"
              }`}
              title={cameraOn ? "Turn camera off" : "Turn camera on"}
            >
              {cameraOn ? (
                <Video className="w-5 h-5" />
              ) : (
                <VideoOff className="w-5 h-5" />
              )}
              <span className="text-sm hidden md:inline">
                {cameraOn ? "Camera" : "Camera off"}
              </span>
            </button>

            <button
              onClick={exitInterview}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-500 shadow-2xl transition"
              title="End interview"
            >
              <X className="w-5 h-5" />
              <span className="text-sm">End Interview</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
