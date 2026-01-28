import { Heart, MessageCircle } from "lucide-react";

const PostCard = () => {
  return (
    <div className="shrink-0 w-full max-w-xl border-2 border-black bg-[#FFF7E6] rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl border-2 border-black bg-[#FFD9A0] flex items-center justify-center font-bold text-black">
          S
        </div>

        <div className="flex-1">
          <p className="font-bold text-sm text-black">Sumit</p>
          <p className="text-xs text-black/60">2 hours ago</p>
        </div>

        <button className="px-2 text-xl font-bold text-black/70 hover:text-black transition">
          ⋯
        </button>
      </div>

      {/* Body: image + actions right */}
      <div className="mt-4 flex gap-3">
        <div className="flex-1 border-2 border-black rounded-2xl overflow-hidden bg-[#F3DFC8] h-[580px]">
          <img
            src="https://i.pinimg.com/736x/4e/54/46/4e5446a6578050139f003f20d860f06a.jpg"
            alt="Dummy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Actions */}
        <div className="w-14 flex flex-col items-center gap-4">
          <button className="w-12 h-12 border-2 border-black rounded-2xl bg-[#FFF7E6] hover:bg-red-100 transition flex flex-col items-center justify-center">
            <Heart size={20} className="text-black" />
            <span className="text-[10px] font-bold mt-1 text-black">24</span>
          </button>

          <button className="w-12 h-12 border-2 border-black rounded-2xl bg-[#FFF7E6] hover:bg-orange-100 transition flex flex-col items-center justify-center">
            <MessageCircle size={20} className="text-black" />
            <span className="text-[10px] font-bold mt-1 text-black">6</span>
          </button>
        </div>
      </div>

      {/* Caption Bottom */}
      <p className="mt-4 text-sm leading-relaxed text-[#3A2E2A]">
        Just finished reading{" "}
        <span className="font-semibold text-black">Atomic Habits</span>. Really
        loved it 📚✨
      </p>
    </div>
  );
};

export default PostCard;
