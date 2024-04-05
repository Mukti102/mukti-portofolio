function Title({ title, info }: { title: string; info: string }) {
  return (
    <div className="text-center">
      <h1 className="sm:text-5xl text-3xl font-[700] gradient-text">{title}</h1>
      <p className="sm:text-[1.1rem] text-[.7rem] font-[400] mt-3">{info}</p>
    </div>
  );
}

export default Title;
