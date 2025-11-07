const TestCard = () => {
  return (
    <div className="">
      <h1 className="text-center text-2xl text-amber-600 mb-6">Test Card</h1>

      <div className="flex justify-center gap-x-5 items-center">
        {/* =============== card ============ */}
        <div className="flex flex-col gap-y-4 w-[400px] h-[285px] rounded-3xl bg-white/60 p-6 border border-gray-500">
          {/* ================ global icon ================ */}
          <div>
            <img src="/src/images/global.png" className="border rounded-[20px] p-[9px] bg-white" />
          </div>
          {/* =============== card info ============ */}
          <div>
            <h4 className="text-lg font-semibold text-[#141B34] leading-[150%]">
              Share your expertise with the <br/>
              community!
            </h4>
            <p className="mt-2 text-[#141B34B2] text-xs leading-[140%]">
              Exciting news! You can now build your brand by posting in the
              Community Feed. Share insights, drills, and connect with athletes
              globally. Turn your expertise into influence and income on
              PlayerZone
            </p>
          </div>
          {/* =============== button =========== */}
          <div className="">
            <button style={{
    background: "linear-gradient(177.43deg, #5C8FF7 10.06%, #276AEE 62.94%)",
  }} className="leading-[140%] text-white text-[10px] w-[142px] cursor-pointer h-[34px] rounded-[64px] font-medium">Explore Community</button>
          </div>
        </div>

        {/* ===================== Card two ================= */}
        <div
          style={{ backgroundImage: "url(/src/images/bg.png)" }}
          className="bg-cover 
             bg-center bg-no-repeat w-[400px] h-[285px] rounded-3xl"
        >
          {/* ============= card info ============= */}
          <div className="p-6 flex flex-col gap-y-[37px]">
            <img src="/src/images/iconImg.png" className="w-10 h-10" />
            <div>
              <h4 className="text-lg font-semibold text-white leading-[150%]">
                Unlock Premium
              </h4>
              <p className="mt-3 text-white text-xs leading-[140%]">
                Access advanced analytics, gain priority visibility for your
                programs, and unlock exclusive tools designed to grow your
                coaching business on PlayerZone.
              </p>
            </div>
            {/* ============= button ========= */}
            <div>
              <button className="relative w-[126.75px] h-[35px] rounded-[37.5px] text-[10px] font-semibold bg-white overflow-hidden cursor-pointer">
                <span className="bg-gradient-to-b from-[#5C8FF7] to-[#276AEE] text-transparent bg-clip-text">
                  Unlock Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
