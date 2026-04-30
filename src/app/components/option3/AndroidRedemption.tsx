import { Link } from "react-router";

export function AndroidRedemption() {
  return (
    <div className="bg-white overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-white overflow-clip relative rounded-[24px] w-[375px] h-[812px] border-2 border-[#1a1a1a]">
        {/* Status Bar */}
        <div className="absolute h-[24px] left-0 top-0 w-full bg-[#1a1a1a]">
          <div className="absolute left-[16px] top-[4px]">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[13px] text-white">9:41</p>
          </div>
          <div className="absolute right-[16px] top-[4px] flex gap-[4px] items-center">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <rect width="16" height="10" rx="1" fill="white"/>
            </svg>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <rect x="0.5" y="0.5" width="19" height="9" rx="1.5" stroke="white"/>
              <rect x="2" y="2" width="14" height="6" rx="1" fill="white"/>
            </svg>
          </div>
        </div>

        {/* App Header */}
        <div className="absolute h-[56px] left-0 top-[24px] w-full bg-white border-b border-[#e0e0e0] flex items-center px-[16px]">
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-[#1a1a1a]">Today</h1>
        </div>

        {/* Welcome Banner */}
        <div className="absolute left-[16px] right-[16px] top-[96px]">
          <div className="bg-gradient-to-br from-[#7500d0] to-[#05c3f9] rounded-[16px] p-[24px] text-center shadow-lg">
            <div className="size-[64px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-[16px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L20 10L29 11L22.5 17L24 26L16 22L8 26L9.5 17L3 11L12 10L16 2Z" fill="white"/>
              </svg>
            </div>

            <h2 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white mb-[8px]">
              Welcome to Elevate Pro!
            </h2>

            <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-white/90 mb-[20px]">
              Your Elevate Premium is active for the next 12 months courtesy of Alex's Family Plan
            </p>

            <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-[16px] mb-[20px]">
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[20px] text-white">
                ✨ All premium games unlocked<br/>
                🧩 Daily crossword puzzles<br/>
                🧠 Personalized training<br/>
                🚫 No ads
              </p>
            </div>

            <Link
              to="/option3/android-premium"
              className="inline-flex items-center justify-center w-full h-[48px] bg-white rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#7500d0]"
            >
              Start Training
            </Link>
          </div>
        </div>

        {/* Content Preview */}
        <div className="absolute left-[16px] right-[16px] top-[520px]">
          <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#1a1a1a] mb-[16px]">
            Today's Workout
          </h3>

          <div className="grid grid-cols-2 gap-[12px]">
            <div className="bg-[#f2f8fa] rounded-[12px] p-[16px]">
              <div className="size-[40px] rounded-full bg-[#05c3f9] flex items-center justify-center mb-[12px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2V10L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-[#1a1a1a] mb-[4px]">Memory</p>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[12px] text-[#606060]">5 min</p>
            </div>

            <div className="bg-[#f2f8fa] rounded-[12px] p-[16px]">
              <div className="size-[40px] rounded-full bg-[#B872FF] flex items-center justify-center mb-[12px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="4" y="6" width="12" height="2" fill="white"/>
                  <rect x="4" y="10" width="12" height="2" fill="white"/>
                  <rect x="4" y="14" width="8" height="2" fill="white"/>
                </svg>
              </div>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-[#1a1a1a] mb-[4px]">Reading</p>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[12px] text-[#606060]">5 min</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-[64px] bg-white border-t border-[#e0e0e0] flex items-center justify-around px-[16px]">
          <button className="flex flex-col items-center gap-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#05c3f9" strokeWidth="2"/>
            </svg>
            <span className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-[#05c3f9]">Today</span>
          </button>

          <button className="flex flex-col items-center gap-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="15" rx="2" stroke="#999" strokeWidth="2"/>
              <path d="M8 3V6M16 3V6" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-[#999]">Progress</span>
          </button>

          <Link to="/option3/android-premium" className="flex flex-col items-center gap-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#999" strokeWidth="2"/>
              <path d="M12 8V12L15 15" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-[#999]">Settings</span>
          </Link>
        </div>

        {/* Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[24px] bg-[#1a1a1a]">
          <div className="-translate-x-1/2 absolute bg-white bottom-[6px] h-[3px] left-1/2 rounded-full w-[100px]" />
        </div>
      </div>
    </div>
  );
}
