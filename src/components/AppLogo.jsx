function AppLogo({
  subtitle = "",
  compact = false,
  giant = false,
}) {
  if (giant) {
    return (
      <div>
        
        <h1 className="mt-6 text-6xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
          <span className="bg-[linear-gradient(135deg,#a7f3d0_44%,#6ee7b7_100%)] bg-clip-text text-transparent">
            eCommerce
          </span>
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            {subtitle}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <p
        className={`font-black tracking-[-0.06em] ${
          compact ? "text-4xl" : "text-5xl"
        }`}
      >
        <span className="bg-[linear-gradient(135deg,#047857_0%,#10b981_55%,#34d399_100%)] bg-clip-text text-transparent">
          eCommerce
        </span>
      </p>
      {!compact ? (
        <p className="mt-2 text-sm text-stone-500">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default AppLogo;
