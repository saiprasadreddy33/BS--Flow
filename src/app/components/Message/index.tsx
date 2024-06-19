// components/Message.tsx

import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setNodes } from "@/redux/slices/flow-slice";

const Message = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { showSaveModal } = useSelector((state: RootState) => state.flow);

  return (
    <div
      onClick={() => dispatch(setNodes())}
      draggable={true}
      className={`${
        showSaveModal ? "pointer-events-none" : ""
      } border border-[#5555c9] h-fit w-full flex flex-col gap-y-[5px] py-[15px] rounded-md justify-center items-center cursor-pointer`}
    >
      <img
        src="/bubble-chat.png"
        alt="Bubble Chat"
        className="w-6 h-6"
        onClick={() => {
          // Handle click logic if needed
        }}
      />
      <p className="text-xs lg:text-sm text-[#5555c9]/90 font-semibold">
        {props.title} {/* custom message title */}
      </p>
    </div>
  );
};

export default Message;
