const ResetButton = () => {
  return (
    <div className=" w-[100%] h-[100%] flex justify-center items-center flex-col min-h-[190.5px] gap-[12px]">
      <div>
        Не удалось загрузить товары...
        <br /> Попробуйте перезагрузить страницу
      </div>
      <button
        className="w-200px h-100px bg-black text-white"
        onClick={() => window.location.reload()}
      >
        Перезагрузить страницу
      </button>
    </div>
  );
};

export default ResetButton;
