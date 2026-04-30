import { Link, useLocation } from "react-router";
import { useState } from "react";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { path: "/", label: "Home - Choose Option" },
    { path: "/option1", label: "Paywall", section: "Option 1 - Full Backend" },
    { path: "/post-purchase", label: "Post-Purchase" },
    { path: "/invite", label: "Invite Flow" },
    { path: "/seat-management", label: "Seat Management" },
    { path: "/redeem", label: "Redemption (Recipient)" },
    { path: "/premium", label: "Premium Tab" },
    { path: "/option2", label: "Paywall", section: "Option 2 - Apple Family Sharing" },
    { path: "/option2/post-purchase", label: "Setup Education" },
    { path: "/option2/premium", label: "Premium Tab (Sharing States)" },
    { path: "/option3", label: "Paywall", section: "Option 3 - Android Concierge" },
    { path: "/option3/post-purchase", label: "Setup + Android Support" },
    { path: "/option3/premium", label: "Premium Tab (iOS + Android)" },
    { path: "/option3/android-email", label: "Android Email Template" },
    { path: "/option3/android-redemption", label: "Android Redemption Screen" },
    { path: "/option3/android-premium", label: "Android Premium Screen" },
  ];

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[20px] right-[20px] z-[100] size-[48px] rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 hover:bg-black/90 transition-all"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="3" y1="5" x2="17" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="3" y1="10" x2="17" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="3" y1="15" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />

          {/* Menu */}
          <div className="fixed top-[80px] right-[20px] w-[280px] bg-black/90 backdrop-blur-md rounded-[16px] border border-white/20 shadow-2xl z-[95] overflow-hidden">
            <div className="p-[16px] border-b border-white/10">
              <h3 className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">
                Navigation Menu
              </h3>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[12px] text-white/60 mt-[4px]">
                Jump to any screen
              </p>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {routes.map((route, index) => (
                <div key={route.path}>
                  {route.section && (
                    <div className="px-[16px] py-[8px] bg-white/5">
                      <p className="font-['DIN_OT:Medium',sans-serif] text-[11px] text-white/60 uppercase tracking-wide">
                        {route.section}
                      </p>
                    </div>
                  )}
                  <Link
                    to={route.path}
                    onClick={() => setIsOpen(false)}
                    className={`block p-[16px] border-b border-white/5 hover:bg-white/10 transition-all ${
                      location.pathname === route.path ? "bg-white/10" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white">
                        {route.label}
                      </span>
                      {location.pathname === route.path && (
                        <div className="size-[8px] rounded-full bg-[#05c3f9]" />
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="p-[16px] border-t border-white/10">
              <p className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-white/40 text-center mb-[4px]">
                Elevate Family Plan Prototype
              </p>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[10px] text-white/30 text-center">
                Option 1: Full Backend | Option 2: Apple | Option 3: +Android
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
