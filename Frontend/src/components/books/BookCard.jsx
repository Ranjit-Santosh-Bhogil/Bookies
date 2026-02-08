const BookCard = ({ book }) => {
  return (
    <div className="group border-2 border-black/70 rounded-2xl bg-[#FFF8EC] overflow-hidden hover:shadow-md transition">
      
      {/* Cover */}
      <div className="relative h-52 bg-[#F3DFC8] overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />

        {/* Exchange tag */}
        {book.exchange && (
          <span className="absolute top-2 left-2 px-2 py-1 text-[10px] font-semibold rounded-full bg-[#FFF7E6]/70 text-black/80 border border-black/20">
            Exchange
          </span>
        )}

        {/* Owner avatar */}
        {book.owner && (
          <div className="absolute bottom-2 right-2 w-8 h-8 rounded-lg border-2 border-black bg-[#FFD9A0] flex items-center justify-center text-xs font-bold">
            {book.owner[0]}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-sm font-semibold text-black line-clamp-2">
          {book.title}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
