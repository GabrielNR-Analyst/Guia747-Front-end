// Interface
interface GridCardProps {
  children: React.ReactNode
}

// Function
export function GridCard({
  children
}: GridCardProps) {

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {children}
    </div>
  )
}