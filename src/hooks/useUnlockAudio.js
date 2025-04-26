// useUnlockAudio.js
import { useEffect } from "react";

const useUnlockAudio = (audioRefs) => {
  useEffect(() => {
    const unlock = () => {
      audioRefs.forEach((ref) => {
        const audio = ref.current;
        if (audio) {
          audio.play().then(() => {
            audio.pause(); // Stop immediately, just to unlock
            audio.currentTime = 0;
          }).catch(() => {});
        }
      });

      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
  }, [audioRefs]);
};

export default useUnlockAudio;
