import React from "react";

const FunnelCard = ({ item }) => {
  return (
    <div className="bg-(--card-bg) border border-(--border-color) rounded-3xl p-8 hover:shadow-xl transition-all">
      <div className="text-6xl font-bold mb-3" style={{ color: item.color }}>
        {item.count}
      </div>
      <div className="font-semibold text-lg text-(--text-primary)">
        {item.label}
      </div>
      <div className="text-sm opacity-70 mt-1">{item.percent}</div>
    </div>
  );
};

export default FunnelCard;
