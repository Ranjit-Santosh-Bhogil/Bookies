import TopSearchBar from "../../components/navigation/TopSearchBar";
import DashboardLayout from "../../layouts/DashboardLayout";
import BookGrid from "../../components/books/BookGrid";

const Explore = () => {
  const books = [
    {
      title: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      exchange: true,
      owner: "Sumit",
    },
    {
      title: "Ikigai",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      exchange: true,
      owner: "Rahul",
    },
    {
      title: "The Alchemist",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      exchange: false,
      owner: "Meera",
    },
    {
      title: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      exchange: true,
      owner: "Sumit",
    },
    {
      title: "Ikigai",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      exchange: true,
      owner: "Rahul",
    },
    {
      title: "The Alchemist",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      exchange: false,
      owner: "Meera",
    },
    {
      title: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      exchange: true,
      owner: "Sumit",
    },
    {
      title: "Ikigai",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      exchange: true,
      owner: "Rahul",
    },
    {
      title: "The Alchemist",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      exchange: false,
      owner: "Meera",
    },
    {
      title: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      exchange: true,
      owner: "Sumit",
    },
    {
      title: "Ikigai",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      exchange: true,
      owner: "Rahul",
    },
    {
      title: "The Alchemist",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      exchange: false,
      owner: "Meera",
    },
    {
      title: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      exchange: true,
      owner: "Sumit",
    },
    {
      title: "Ikigai",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      exchange: true,
      owner: "Rahul",
    },
    {
      title: "The Alchemist",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      exchange: false,
      owner: "Meera",
    },
  ];

  const categories = [
    "All",
    "Fiction",
    "Self-Help",
    "Fantasy",
    "Academic",
    "Programming",
    "Manga",
  ];

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col">
        {/* Search Bar */}
        <TopSearchBar />

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          
          {/* Category Filters */}
          <div className="p-4 border-b-2 border-black/70 bg-[#F5EAD7]">
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 text-sm font-semibold border-2 border-black rounded-full bg-[#FFF7E6] hover:bg-[#FFD9A0]/60 transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Book Grid */}
          <div className="p-6">
            <BookGrid books={books} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Explore;
