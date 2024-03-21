import React from "react";

export default function blogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div style={{ backgroundColor: "skyblue", height: "50px" }}>
        블로깅 공용 상단 메뉴
      </div>
      {children}
    </div>
  );
}
