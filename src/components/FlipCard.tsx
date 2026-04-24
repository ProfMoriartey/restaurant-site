export default function FlipCard({ title, description }: { title: string, description: string }) {
    return (
      <div className="group h-64 w-full [perspective:1000px]">
        <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          
          {/* Front Panel */}
          <div className="absolute inset-0 flex items-center justify-center bg-black border-2 border-black [backface-visibility:hidden]">
            <h3 className="text-2xl font-black text-amber-400 tracking-widest">{title}</h3>
          </div>
          
          {/* Back Panel */}
          <div className="absolute inset-0 flex items-center justify-center bg-white border-2 border-black text-black px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-sm font-bold">{description}</p>
          </div>
  
        </div>
      </div>
    )
  }