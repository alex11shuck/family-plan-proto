import { Link, useNavigate } from "react-router";
import { useState } from "react";
import svgPaths from "../../../imports/IPhone13Mini-3/svg-2fbvh9gxs5";

export function PaywallOption2() {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<"family" | "individual">("family");
  const [showEligibilityModal, setShowEligibilityModal] = useState(false);

  const handleContinue = () => {
    if (selectedTier === "family") {
      setShowEligibilityModal(true);
    } else {
      navigate("/option2/post-purchase");
    }
  };

  return (
    <div className="bg-white overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-white overflow-clip relative rounded-[40px] w-[375px] h-[812px]">
        {/* Status Bar */}
        <div className="absolute h-[47px] left-0 overflow-clip top-0 w-full">
          <div className="absolute left-[21px] top-[14px]">
            <p className="font-['SF_Pro_Text:Semibold',sans-serif] text-[16px] text-black tracking-[-0.32px]">9:41</p>
          </div>
          <div className="absolute right-[21px] top-[19px] flex gap-[5px] items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M1 1H17V11H1V1Z" stroke="black" opacity="0.35"/>
              <rect x="2" y="2" width="14" height="8" fill="black"/>
            </svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p17a4bf30} fill="black"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
              <rect x="0.5" y="0.5" width="24" height="12" rx="2.5" stroke="black" opacity="0.35"/>
              <rect x="2" y="2" width="21" height="9" rx="1" fill="black"/>
              <path d="M26 5V8C26 8.55228 25.5523 9 25 9V4C25.5523 4 26 4.44772 26 5Z" fill="black" opacity="0.4"/>
            </svg>
          </div>
          <div className="-translate-x-1/2 absolute h-[32px] left-1/2 top-0 w-[162px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 32">
              <path d={svgPaths.p2da89f00} fill="black"/>
            </svg>
          </div>
        </div>

        {/* Close Button */}
        <Link to="/" className="absolute left-[10px] top-[55px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#474747" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>

        {/* Header */}
        <h1 className="absolute left-1/2 -translate-x-1/2 top-[125px] font-['DIN_2014:Demi',sans-serif] text-[31.419px] leading-[40.395px] text-[#1a1a1a] text-center whitespace-nowrap">
          7 Days for Free
        </h1>

        {/* Pricing info */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[180px] text-center">
          <p className="font-['DIN_2014:Regular',sans-serif] text-[15.709px] leading-[1.55] text-[#224722]">
            then {selectedTier === "family" ? "$59.99" : "$39.99"} / year
          </p>
          <p className="font-['DIN_2014:Regular',sans-serif] text-[15.709px] leading-[1.55] text-[#224722]">
            ({selectedTier === "family" ? "$59.99" : "$39.99"} billed annually after trial)
          </p>
        </div>

        {/* Stats */}
        <div className="absolute left-[39px] top-[284px] flex items-center gap-[28px]">
          <div className="text-center">
            <p className="font-['GT_America:Bold',sans-serif] text-[23.796px] leading-[27.841px] text-[#1a1a1a]">60M+</p>
            <p className="font-['GT_America:Medium',sans-serif] text-[11.4px] text-[#1a1a1a]">happy users</p>
          </div>
          <svg width="28" height="55" viewBox="0 0 28 55" fill="none">
            <path clipRule="evenodd" d={svgPaths.p31b9fac0} fill="url(#paint0_linear_paywall2)" fillRule="evenodd"/>
            <defs>
              <linearGradient id="paint0_linear_paywall2" x1="8.78082" y1="2.34712" x2="8.78082" y2="13.0143" gradientUnits="userSpaceOnUse">
                <stop stopColor="#35FFF3"/>
                <stop offset="1" stopColor="#CD8EFF"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center">
            <p className="font-['GT_America:Bold',sans-serif] text-[14.107px] leading-[12.696px] text-[#1a1a1a] mb-[8px]">4.8 STAR RATING</p>
            <div className="flex gap-[5.643px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path d="M9 0L11.7063 6.21885L18 7.32746L13.5 12.0312L14.4127 18.5L9 15.2082L3.58729 18.5L4.5 12.0312L0 7.32746L6.29373 6.21885L9 0Z" fill="#FFA200"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="absolute left-[40px] top-[397px] right-0 flex gap-[16px] overflow-x-auto no-scrollbar pb-[8px]">
          <div className="bg-[#f2f8fa] rounded-[30px] p-[24px] w-[294px] shrink-0">
            <div className="flex gap-[5.643px] mb-[11.474px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M9.5 0L11.6329 7.11712L19 8.06155L13.75 13.6329L14.7658 21L9.5 16.8671L4.23417 21L5.25 13.6329L0 8.06155L7.36712 7.11712L9.5 0Z" fill="#05C3F9"/>
                </svg>
              ))}
            </div>
            <p className="font-['DIN_2014:Demi',sans-serif] text-[15.299px] leading-[22.949px] text-[#1a1a1a] mb-[3.825px]">
              "Elevate is my alternative to scrolling. My vocabulary has widened, and my short-term memory has improved!"
            </p>
            <p className="font-['DIN_2014:Regular',sans-serif] text-[13.387px] leading-[19.124px] text-[#999]">Jackie E</p>
          </div>
        </div>

        {/* No payment due now */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[627px] flex items-center gap-[6px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9L7.5 12.75L14.25 6" stroke="#606060" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="font-['DIN_2014:Regular',sans-serif] text-[13.5px] leading-[1.3] text-[#606060]">No payment due now</p>
        </div>

        {/* Plan Selection Drawer */}
        <div className="absolute bg-white drop-shadow-[0px_-10px_12.75px_rgba(0,0,0,0.15)] flex flex-col gap-[29px] h-[411px] items-center left-0 pb-[7.634px] pt-[12px] px-[7.634px] rounded-tl-[20px] rounded-tr-[20px] top-[401px] w-full">
          <div className="bg-black h-[3.817px] rounded-[8px] w-[38.168px]"/>

          <div className="flex flex-col gap-[12px] w-[327px]">
            {/* Family Plan */}
            <button
              onClick={() => setSelectedTier("family")}
              className={`bg-white rounded-[10px] overflow-hidden ${
                selectedTier === "family" ? "border-2 border-[#05c3f9]" : "border border-[#dcdcdc]"
              }`}
            >
              <div className="bg-[#05c3f9] p-[4px]">
                <p className="font-['DIN_2014:Demi',sans-serif] text-[12px] leading-[18px] text-white text-center">
                  BEST DEAL - 75% OFF + FREE TRIAL
                </p>
              </div>
              <div className="p-[16px]">
                <div className="flex items-start gap-[2px] mb-[8px]">
                  <div className="flex-1">
                    <p className="font-['DIN_2014:Demi',sans-serif] text-[20px] leading-[28px] text-[#1a1a1a]">Family Plan</p>
                    <p className="font-['DIN_2014:Regular',sans-serif] text-[12px] leading-[20px] text-[#1a1a1a]">7 days free, then 12 months for $59.99</p>
                  </div>
                  <div className="text-right">
                    <p className="font-['DIN_2014:Regular',sans-serif] text-[14px] leading-[20px] text-[#999] line-through">$9.99 / mo</p>
                    <p className="font-['DIN_2014:Demi',sans-serif] text-[14px] leading-[20px] text-[#1a1a1a]">$5.00 / mo</p>
                  </div>
                </div>
                <div className="bg-[#f2f8fa] rounded-[8px] p-[10px] flex items-start gap-[8px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 12C7.4 12 7 11.6 7 11C7 10.4 7.4 10 8 10C8.6 10 9 10.4 9 11C9 11.6 8.6 12 8 12ZM9 9H7V4H9V9Z" fill="#05c3f9"/>
                  </svg>
                  <p className="font-['DIN_2014:Regular',sans-serif] text-[11px] leading-[16px] text-[#1a1a1a]">
                    Shared via Apple Family Sharing — iOS only
                  </p>
                </div>
              </div>
            </button>

            {/* Individual Plan */}
            <button
              onClick={() => setSelectedTier("individual")}
              className={`bg-white rounded-[10px] p-[16px] ${
                selectedTier === "individual" ? "border-2 border-[#05c3f9]" : "border border-[#dcdcdc]"
              }`}
            >
              <div className="flex items-center gap-[2px]">
                <p className="flex-1 font-['DIN_2014:Demi',sans-serif] text-[16px] leading-[24px] text-[#606060]">Individual Plan</p>
                <p className="font-['DIN_2014:Regular',sans-serif] text-[14px] leading-[20px] text-[#606060]">$3.33 / mo</p>
              </div>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleContinue}
          className="absolute left-[24px] top-[658px] w-[327px] h-[64px] flex items-center justify-center rounded-[4px] bg-[#05c3f9]"
        >
          <span className="font-['DIN_2014:Demi',sans-serif] text-[20px] leading-[28px] text-white">Start your FREE week</span>
        </button>

        {/* Footer Links */}
        <p className="absolute left-1/2 -translate-x-1/2 bottom-[135px] font-['DIN_2014:Regular',sans-serif] text-[14px] leading-[20px] text-[#606060]">Cancel anytime</p>
        <p className="absolute left-1/2 -translate-x-1/2 bottom-[107px] font-['DIN_2014:Regular',sans-serif] text-[14px] leading-[20px] text-[#05c3f9] underline">View all plans</p>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 backdrop-blur-[20px] bg-[rgba(0,0,0,0.9)] h-[5px] w-[134px] rounded-full"/>

        {/* Eligibility Modal */}
        {showEligibilityModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-[24px] z-50">
            <div className="bg-white rounded-[20px] p-[24px] w-full max-w-[327px]">
              <div className="size-[56px] rounded-full bg-[#05c3f9]/10 flex items-center justify-center mx-auto mb-[20px]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 0C6.3 0 0 6.3 0 14C0 21.7 6.3 28 14 28C21.7 28 28 21.7 28 14C28 6.3 21.7 0 14 0ZM14 21C13 21 12.25 20.25 12.25 19.25C12.25 18.25 13 17.5 14 17.5C15 17.5 15.75 18.25 15.75 19.25C15.75 20.25 15 21 14 21ZM15.75 15.75H12.25V7H15.75V15.75Z" fill="#05c3f9"/>
                </svg>
              </div>
              <h3 className="font-['DIN_2014:Demi',sans-serif] text-[20px] leading-[28px] text-[#1a1a1a] text-center mb-[12px]">
                Before You Continue
              </h3>
              <p className="font-['DIN_2014:Regular',sans-serif] text-[16px] leading-[24px] text-[#606060] text-center mb-[24px]">
                Family Plan is shared through Apple Family Sharing. You'll need an Apple Family Group set up on your iPhone.
              </p>
              <div className="flex flex-col gap-[12px]">
                <button className="h-[48px] bg-white border-2 border-[#05c3f9] rounded-[8px] font-['DIN_2014:Demi',sans-serif] text-[16px] text-[#05c3f9]">
                  Learn More
                </button>
                <Link
                  to="/option2/post-purchase"
                  className="h-[48px] bg-[#05c3f9] rounded-[8px] font-['DIN_2014:Demi',sans-serif] text-[16px] text-white flex items-center justify-center"
                >
                  Continue
                </Link>
                <button
                  onClick={() => setShowEligibilityModal(false)}
                  className="h-[40px] font-['DIN_2014:Regular',sans-serif] text-[14px] text-[#606060]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
