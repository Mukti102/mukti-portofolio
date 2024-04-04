function Title({ title, info }: { title: string; info: string }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-[700] ">{title}</h1>
      <p className="text-[1.1rem] font-[400] mt-3">{info}</p>
    </div>
  );
}

export default Title;
