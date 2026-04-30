import { Link } from "react-router";

export function AndroidPremium() {
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
          <Link to="/option3/android-redemption" className="mr-[16px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-[#1a1a1a]">Settings</h1>
        </div>

        {/* Content - Scrollable */}
        <div className="absolute left-0 right-0 top-[80px] bottom-[88px] overflow-y-auto no-scrollbar px-[16px]">
          {/* Premium Status Card */}
          <div className="bg-gradient-to-br from-[#7500d0] to-[#05c3f9] rounded-[16px] p-[24px] text-center mb-[24px]">
            <div className="size-[64px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-[16px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L20 10L29 11L22.5 17L24 26L16 22L8 26L9.5 17L3 11L12 10L16 2Z" fill="white"/>
              </svg>
            </div>

            <h2 className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white mb-[8px]">
              Elevate Premium
            </h2>

            <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-[16px] mb-[4px]">
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[20px] text-white mb-[8px]">
                Granted via Family Plan
              </p>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">
                Expires May 30, 2027
              </p>
            </div>
          </div>

          {/* Family Plan Info */}
          <div className="bg-[#f2f8fa] rounded-[12px] p-[20px] mb-[24px]">
            <div className="flex items-start gap-[12px]">
              <div className="size-[40px] rounded-full bg-gradient-to-br from-[#05c3f9] to-[#B872FF] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-white">A</span>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                  Shared by Alex
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  You're part of their Elevate Family Plan
                </p>
              </div>
            </div>
          </div>

          {/* Premium Features */}
          <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#1a1a1a] mb-[16px]">
            Your Premium Benefits
          </h3>

          <div className="space-y-[12px] mb-[24px]">
            <div className="bg-white rounded-[12px] p-[16px] border border-[#e0e0e0]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-[#05c3f9]/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z" fill="#05c3f9"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[2px]">
                    All Premium Games
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                    Unlimited access to 40+ games
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-[16px] border border-[#e0e0e0]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-[#B872FF]/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="14" rx="2" fill="#B872FF"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[2px]">
                    Daily Crossword
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                    New puzzle each day
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-[16px] border border-[#e0e0e0]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-[#ff9500]/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2Z" fill="#ff9500"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[2px]">
                    Personalized Training
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                    Adaptive difficulty levels
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-[16px] border border-[#e0e0e0]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-[#1a1a1a]/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#1a1a1a" strokeWidth="2"/>
                    <line x1="4" y1="16" x2="16" y2="4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[2px]">
                    No Ads
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                    Uninterrupted experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-[#fff5e6] border-l-4 border-[#ff9500] rounded-[8px] p-[16px] mb-[24px]">
            <div className="flex items-start gap-[12px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]">
                <circle cx="10" cy="10" r="9" stroke="#ff9500" strokeWidth="2"/>
                <path d="M10 6V10M10 14H10.01" stroke="#ff9500" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-[#1a1a1a] mb-[4px]">
                  Subscription Management
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[13px] leading-[20px] text-[#606060]">
                  Your Premium access is managed by Alex's Family Plan. You don't need to manage a subscription or payment method.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-[12px] p-[16px] border border-[#e0e0e0]">
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[22px] text-[#606060] text-center">
              Questions about your Premium access?<br/>
              <a href="#" className="text-[#05c3f9] underline">Contact Elevate Support</a>
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-[24px] left-0 right-0 h-[64px] bg-white border-t border-[#e0e0e0] flex items-center justify-around px-[16px]">
          <Link to="/option3/android-redemption" className="flex flex-col items-center gap-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#999" strokeWidth="2"/>
            </svg>
            <span className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-[#999]">Today</span>
          </Link>

          <button className="flex flex-col items-center gap-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="15" rx="2" stroke="#999" strokeWidth="2"/>
              <path d="M8 3V6M16 3V6" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-[#999]">Progress</span>
          </button>

          <button className="flex flex-col items-center gap-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#05c3f9" strokeWidth="2"/>
              <path d="M12 8V12L15 15" stroke="#05c3f9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-[#05c3f9]">Settings</span>
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[24px] bg-[#1a1a1a]">
          <div className="-translate-x-1/2 absolute bg-white bottom-[6px] h-[3px] left-1/2 rounded-full w-[100px]" />
        </div>
      </div>
    </div>
  );
}
