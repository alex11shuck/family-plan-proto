import { Link } from "react-router";
import { useState } from "react";

interface FamilyMember {
  id: string;
  name: string;
  email: string;
  status: "active" | "pending";
}

export function SeatManagement() {
  const [members, setMembers] = useState<FamilyMember[]>([
    { id: "1", name: "Sarah Johnson", email: "sarah.j@email.com", status: "active" },
    { id: "2", name: "Mike Johnson", email: "mike.j@email.com", status: "active" },
    { id: "3", name: "", email: "emma.j@email.com", status: "pending" },
  ]);

  const [showRemoveModal, setShowRemoveModal] = useState<string | null>(null);

  const activeMembers = members.filter(m => m.status === "active");
  const pendingInvites = members.filter(m => m.status === "pending");
  const usedSeats = members.length;
  const totalSeats = 6;
  const availableSeats = totalSeats - usedSeats - 1;

  const handleRemove = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
    setShowRemoveModal(null);
  };

  const handleResend = (email: string) => {
    alert(`Invitation resent to ${email}`);
  };

  const handleCancel = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

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
        <Link to="/premium" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Header */}
        <div className="absolute left-[24px] right-[24px] top-[100px]">
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white mb-[8px]">
            Family Plan
          </h1>
          <div className="flex items-center gap-[8px] mb-[16px]">
            <div className="flex-1 h-[8px] bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#05c3f9] rounded-full transition-all"
                style={{ width: `${((usedSeats + 1) / totalSeats) * 100}%` }}
              />
            </div>
            <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-white">
              {usedSeats + 1}/{totalSeats}
            </p>
          </div>
          <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
            {availableSeats} {availableSeats === 1 ? "seat" : "seats"} available to share
          </p>
        </div>

        {/* Content */}
        <div className="absolute left-[24px] right-[24px] top-[220px] bottom-[100px] overflow-y-auto">
          {/* Your Seat */}
          <div className="mb-[24px]">
            <h3 className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white/60 mb-[12px]">
              YOUR ACCOUNT
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-gradient-to-br from-[#05c3f9] to-[#B872FF] flex items-center justify-center">
                  <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">You</span>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">
                    Account Owner
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                    Premium Active
                  </p>
                </div>
                <div className="size-[20px] rounded-full bg-[#05c3f9] flex items-center justify-center">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Active Members */}
          {activeMembers.length > 0 && (
            <div className="mb-[24px]">
              <h3 className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white/60 mb-[12px]">
                ACTIVE MEMBERS ({activeMembers.length})
              </h3>
              <div className="space-y-[12px]">
                {activeMembers.map((member) => (
                  <div key={member.id} className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
                    <div className="flex items-center gap-[12px]">
                      <div className="size-[40px] rounded-full bg-white/20 flex items-center justify-center">
                        <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">
                          {member.name}
                        </p>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                          {member.email}
                        </p>
                      </div>
                      <button
                        onClick={() => setShowRemoveModal(member.id)}
                        className="size-[32px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pending Invites */}
          {pendingInvites.length > 0 && (
            <div className="mb-[24px]">
              <h3 className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white/60 mb-[12px]">
                PENDING INVITES ({pendingInvites.length})
              </h3>
              <div className="space-y-[12px]">
                {pendingInvites.map((member) => (
                  <div key={member.id} className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20 border-dashed">
                    <div className="flex items-center gap-[12px] mb-[12px]">
                      <div className="size-[40px] rounded-full bg-white/10 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 10C12.21 10 14 8.21 14 6C14 3.79 12.21 2 10 2C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10ZM10 12C7.33 12 2 13.34 2 16V18H18V16C18 13.34 12.67 12 10 12Z" fill="white" opacity="0.4"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/60">
                          {member.email}
                        </p>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                          Invitation sent
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <button
                        onClick={() => handleResend(member.email)}
                        className="flex-1 h-[36px] bg-white/10 rounded-[6px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white hover:bg-white/20"
                      >
                        Resend
                      </button>
                      <button
                        onClick={() => handleCancel(member.id)}
                        className="flex-1 h-[36px] bg-white/10 rounded-[6px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white/60 hover:bg-white/20"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add More Button */}
          {availableSeats > 0 && (
            <Link
              to="/invite"
              className="block bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border-2 border-dashed border-white/30 hover:border-[#05c3f9] hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">
                  Invite More Family Members
                </span>
              </div>
            </Link>
          )}
        </div>

        {/* Manage Subscription Link */}
        <div className="absolute left-[24px] right-[24px] bottom-[40px]">
          <button className="w-full h-[48px] flex items-center justify-center">
            <span className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80">
              Manage Subscription
            </span>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />

        {/* Remove Modal */}
        {showRemoveModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-[32px] z-50">
            <div className="bg-white/20 backdrop-blur-md rounded-[16px] p-[24px] w-full max-w-[320px] border border-white/30">
              <h3 className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white text-center mb-[12px]">
                Remove Member?
              </h3>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-[#bbb5ff] text-center mb-[24px]">
                {members.find(m => m.id === showRemoveModal)?.name} will lose access to Elevate Premium immediately.
              </p>
              <div className="flex gap-[12px]">
                <button
                  onClick={() => setShowRemoveModal(null)}
                  className="flex-1 h-[48px] bg-white/10 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[16px] text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleRemove(showRemoveModal)}
                  className="flex-1 h-[48px] bg-[#ff4444] rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[16px] text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
