

export const SectionHeader = ({
  title,
  description,
  eyebrow,
}:{
  title:string;
  eyebrow:string;
  description:string;
}) => {
 
  return (
    <>
      <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from bg-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">{eyebrow} </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">{description}</p>
    </>
      
  )
}


