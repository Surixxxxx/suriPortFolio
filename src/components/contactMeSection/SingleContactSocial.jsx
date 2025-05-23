const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full 
        p-3 flex items-center justify-center transition-all duration-300 
        hover:bg-orange hover:text-white hover:scale-110 hover:rotate-6 
        hover:shadow-[0_0_12px_rgba(255,115,0,0.7)]"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
