// import { Input } from "@/components/ui/input";
// import { SearchIcon } from "lucide-react";
// import { useRouter } from "next/router";
// import { useCallback } from "react";

// export function Search() {

//   const router = useRouter()
//   const query = (router.query.q as string) ?? '';

//   const handleSearch = useCallback(
//     (event: React.FormEvent) => {
//       event.preventDefault();
//       if (query.trim()) {
//         router.push(`/blog?q=${encodeURIComponent(query)}`);
//       }
//     },
//     [query, router]
//   );

//   const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newQuery = event.target.value;
//     router.push(`/city?q=${encodeURIComponent(newQuery)}`, undefined, {
//       shallow: true,
//       scroll: false,
//     });
//   };

//   const resetSearch = () => {
//     router.push('/city', undefined, { shallow: true, scroll: false });
//   };

//   return (
//       <form className="relative h-10 w-[416px]" onSubmit={handleSearch}>  
//         <SearchIcon 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" 
//         />
//         <Input
//           type="text"
//           placeholder="Qual cidade você procura?"
//           className="pl-10 pr-3 py-2 text-md w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F25D27] focus:border-transparent" 
//         />
//       </form>
//   )
// }