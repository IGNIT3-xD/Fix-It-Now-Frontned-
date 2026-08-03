import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
    return (
        <div className='w-60 h-60 sm:w-70 sm:h-70'>
            <DotLottieReact
                src="https://lottie.host/d41ea2c0-fe43-4cfd-84e0-f2bb8a3bf805/sttWWppgDm.json"
                loop
                autoplay
                className='w-full h-full'
            />
        </div>
    );
};

export default Loader