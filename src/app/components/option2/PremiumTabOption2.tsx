import { Link } from "react-router";
import { useState } from "react";

export function PremiumTabOption2() {
  const [sharingEnabled, setSharingEnabled] = useState(true);

  return (
    <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative rounded-[40px] w-[375px] h-[812px]">
        {/* Status Bar */}
        <div className="absolute h-[47px] left-0 top-0 w-full overflow-clip">
          <div className="absolute left-[21px] top-[14px]">
            <p className="font-['SF_Pro_Text:Semibold',sans-serif] text-[16px] text-white tracking-[-0.32px]">9:41</p>
          </div>
          <div className="absolute right-[21px] top-[19px] flex gap-[5px] items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect width="18" height="12" rx="2" fill="white" opacity="0.4"/>
            </svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 0H17V12H0V0Z" fill="white"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
              <rect x="0.5" y="0.5" width="24" height="12" rx="2.5" stroke="white" opacity="0.35"/>
              <rect x="2" y="2" width="21" height="9" rx="1" fill="white"/>
              <path d="M26 5V8C26 8.55228 25.5523 9 25 9V4C25.5523 4 26 4.44772 26 5Z" fill="white" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Back Button */}
        <Link to="/option2/" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Header */}
        <div className="absolute left-0 right-0 top-[100px] text-center">
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white px-[24px]">
            Premium Benefits
          </h1>
        </div>

        {/* Toggle Sharing State Button (for demo) */}
        <button
          onClick={() => setSharingEnabled(!sharingEnabled)}
          className="absolute right-[24px] top-[150px] h-[32px] px-[12px] bg-white/20 backdrop-blur-sm rounded-[16px] font-['DIN_OT:Regular',sans-serif] text-[12px] text-white border border-white/30 z-10"
        >
          Toggle State (Demo)
        </button>

        {/* Premium Badge */}
        <div className="absolute left-[24px] right-[24px] top-[180px]">
          <div className="bg-gradient-to-br from-[#05c3f9] to-[#B872FF] rounded-[16px] p-[20px] text-center">
            <div className="size-[60px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-[12px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L20 10L29 11L22.5 17L24 26L16 22L8 26L9.5 17L3 11L12 10L16 2Z" fill="white"/>
              </svg>
            </div>
            <h2 className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white mb-[4px]">
              Elevate Premium
            </h2>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">
              Active until May 30, 2027
            </p>
          </div>
        </div>

        {/* Settings List */}
        <div className="absolute left-[24px] right-[24px] top-[360px] bottom-[60px] overflow-y-auto">
          {/* Family Plan */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20 mb-[16px]">
            <div className="flex items-start gap-[12px] mb-[16px]">
              <div className="size-[40px] rounded-full bg-gradient-to-br from-[#05c3f9] to-[#B872FF] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13 13C15.21 13 17 11.21 17 9C17 6.79 15.21 5 13 5C10.79 5 9 6.79 9 9C9 11.21 10.79 13 13 13ZM7 7C8.66 7 10 5.66 10 4C10 2.34 8.66 1 7 1C5.34 1 4 2.34 4 4C4 5.66 5.34 7 7 7ZM13 15C10.33 15 5 16.34 5 19V21H21V19C21 16.34 15.67 15 13 15ZM7 9C4.67 9 0 10.17 0 12.5V15H3V12.5C3 11.88 3.92 10.83 6.14 10.21C6.05 9.82 6 9.42 6 9C6 8.66 6.03 8.33 6.08 8C5.72 7.97 5.36 7.95 5 7.95C2.67 7.95 0 9.12 0 11.45V13.95H3V11.45C3 10.83 3.92 9.78 6.14 9.16C5.05 8.67 4.5 7.91 4.5 7C4.5 5.62 5.62 4.5 7 4.5C7.58 4.5 8.12 4.69 8.54 5.01C9.27 4.37 10.18 4 11.14 4C10.45 5.04 10 6.29 10 7.65C10 8.35 10.13 9.01 10.36 9.63C8.93 9.88 7.67 10.43 7 11.21V9C7 8.66 7.03 8.33 7.08 8C6.72 7.97 6.36 7.95 6 7.95Z" fill="white"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[4px]">
                  Family Plan
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  Shared via Apple Family Sharing
                </p>

                {sharingEnabled ? (
                  <>
                    <div className="bg-[#05c3f9]/20 border border-[#05c3f9]/40 rounded-[8px] p-[12px] mb-[12px]">
                      <div className="flex items-start gap-[8px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                          <circle cx="8" cy="8" r="7" fill="#05c3f9"/>
                          <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                          Sharing is enabled. Family members in your Apple Family Group have access.
                        </p>
                      </div>
                    </div>
                    <button className="w-full h-[44px] bg-white/20 hover:bg-white/30 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white flex items-center justify-center gap-[8px]">
                      <span>Manage in iOS Settings</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="bg-[#ff9500]/20 border border-[#ff9500]/40 rounded-[8px] p-[12px] mb-[12px]">
                      <div className="flex items-start gap-[8px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                          <circle cx="8" cy="8" r="7" stroke="#ff9500" strokeWidth="2"/>
                          <path d="M8 4V8M8 11H8.01" stroke="#ff9500" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                          Sharing is not yet enabled. Your family doesn't have access yet.
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/option2/post-purchase"
                      className="w-full h-[44px] bg-[#05c3f9] hover:bg-[#04b3e8] rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white flex items-center justify-center gap-[8px]"
                    >
                      <span>Open iOS Settings to Turn On Sharing</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-[12px]">
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[2px]">
                    All Premium Games
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                    Unlimited access
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="14" rx="2" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[2px]">
                    Daily Crossword
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                    New puzzle each day
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" stroke="white" strokeWidth="2" opacity="0.8"/>
                    <line x1="4" y1="16" x2="16" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[2px]">
                    No Ads
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                    Uninterrupted experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
