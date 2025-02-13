const CardAnimatedBorderGradient = () => {
  return (
    <div className='relative h-48 w-48 overflow-hidden rounded-xl border border-neutral-800 p-[1px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EEE_0%,#2b7fff_50%,#EEE_100%)]' />
      <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-black px-3 py-1 text-sm font-medium text-neutral-50 backdrop-blur-3xl' />
    </div>
  );
};

export default CardAnimatedBorderGradient;
