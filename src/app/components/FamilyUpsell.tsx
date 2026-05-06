import { Link } from "react-router";

export function FamilyUpsell() {
  return (
    <div className="bg-white overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-white overflow-clip relative rounded-[24px] w-[375px] h-[812px] border-2 border-[#1a1a1a]">
        {/* Status Bar */}
        <div className="absolute h-[44px] left-0 top-0 w-full">
          <div className="absolute left-[21px] top-[14px]">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[15px] text-[#1a1a1a]">9:41</p>
          </div>
          <div className="absolute right-[21px] top-[14px] flex gap-[4px] items-center">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <rect width="16" height="10" rx="1" fill="#1a1a1a"/>
            </svg>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <rect x="0.5" y="0.5" width="19" height="9" rx="1.5" stroke="#1a1a1a"/>
              <rect x="2" y="2" width="14" height="6" rx="1" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>

        {/* Close Button */}
        <button className="absolute top-[54px] right-[24px] z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#f5f5f5"/>
            <path d="M15 9L9 15M9 9L15 15" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Content - Scrollable */}
        <div className="absolute left-0 right-0 top-[100px] bottom-[140px] overflow-y-auto no-scrollbar px-[24px]">
          {/* Family Illustration */}
          <div className="flex items-center justify-center mb-[24px]">
            <div className="flex items-center gap-[-8px]">
              <div className="size-[56px] rounded-full bg-gradient-to-br from-[#7500d0] to-[#B872FF] flex items-center justify-center border-2 border-white">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white">A</span>
              </div>
              <div className="size-[56px] rounded-full bg-gradient-to-br from-[#05c3f9] to-[#0088cc] flex items-center justify-center border-2 border-white -ml-[12px]">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white">B</span>
              </div>
              <div className="size-[56px] rounded-full bg-gradient-to-br from-[#ff9500] to-[#ff6b00] flex items-center justify-center border-2 border-white -ml-[12px]">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white">C</span>
              </div>
              <div className="size-[56px] rounded-full bg-gradient-to-br from-[#34c759] to-[#248a3d] flex items-center justify-center border-2 border-white -ml-[12px]">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white">+3</span>
              </div>
            </div>
          </div>

          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[32px] leading-[40px] text-[#1a1a1a] text-center mb-[12px]">
            Switch to Family Plan
          </h1>

          <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] leading-[28px] text-[#606060] text-center mb-[32px]">
            Share Premium with up to 6 people for just a little more
          </p>

          {/* Delta Pricing Callout */}
          <div className="bg-gradient-to-br from-[#7500d0] to-[#05c3f9] rounded-[16px] p-[24px] text-center mb-[32px]">
            <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80 mb-[8px]">
              Only
            </p>
            <p className="font-['DIN_OT:Medium',sans-serif] text-[48px] leading-[56px] text-white mb-[4px]">
              $1.67/mo
            </p>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80">
              more than your current plan
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-[16px] mb-[24px]">
            <div className="flex items-start gap-[16px]">
              <div className="size-[40px] rounded-full bg-[#05c3f9]/10 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6 2 3 5 3 9C3 13 10 18 10 18C10 18 17 13 17 9C17 5 14 2 10 2Z" stroke="#05c3f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="9" r="2" stroke="#05c3f9" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                  Share with 6 people total
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  Everyone gets their own account with full Premium features
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[16px]">
              <div className="size-[40px] rounded-full bg-[#B872FF]/10 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z" fill="#B872FF"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                  All Premium features
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  40+ games, personalized training, no ads
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[16px]">
              <div className="size-[40px] rounded-full bg-[#34c759]/10 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" rx="2" stroke="#34c759" strokeWidth="2"/>
                  <path d="M7 10L9 12L13 8" stroke="#34c759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                  Easy to manage
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  Invite via email, cancel anytime
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-[#f2f8fa] rounded-[12px] p-[20px] mb-[24px]">
            <div className="flex items-center justify-between mb-[12px]">
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                Current: Individual Annual
              </p>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-[#606060]">
                $39.99/yr
              </p>
            </div>
            <div className="flex items-center justify-between mb-[12px] pb-[12px] border-b border-[#e0e0e0]">
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                Upgrade difference
              </p>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-[#606060]">
                +$20.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a]">
                New: Family Plan
              </p>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#1a1a1a]">
                $59.99/yr
              </p>
            </div>
          </div>

          {/* Fine Print */}
          <p className="font-['DIN_OT:Regular',sans-serif] text-[12px] leading-[18px] text-[#999] text-center mb-[24px]">
            You'll be charged the $20 difference now. Your annual renewal will be $59.99. Invite family members anytime. Cancel in Settings.
          </p>
        </div>

        {/* Bottom CTAs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] px-[24px] py-[20px]">
          <Link
            to="/family-upsell-confirmation"
            className="w-full h-[56px] bg-gradient-to-r from-[#7500d0] to-[#05c3f9] rounded-[12px] flex items-center justify-center font-['DIN_OT:Medium',sans-serif] text-[18px] text-white mb-[12px]"
          >
            Switch to Family Plan
          </Link>
          <Link
            to="/premium"
            className="w-full h-[48px] flex items-center justify-center font-['DIN_OT:Regular',sans-serif] text-[16px] text-[#606060]"
          >
            Keep Individual
          </Link>
        </div>
      </div>
    </div>
  );
}
