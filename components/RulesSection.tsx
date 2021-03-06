import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { GameDataContext } from '../pages/_app';

interface rulesModalInterface {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<any>>;
    imgSrc: string;
}

const RulesModal = ({ showModal, setShowModal, imgSrc }: rulesModalInterface) => {
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div
            className={`bg-white p-8 w-screen tablet:w-96 h-screen tablet:h-auto top-0 tablet:top-1/2 tablet:left-1/2 transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 transition-all ${
                showModal ? 'scale - 100' : 'scale-0'
            } text-neutral-dark absolute rounded-none tablet:rounded flex flex-col`}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">RULES</h2>
                <div onClick={handleClose} onKeyPress={handleClose} className="cursor-pointer">
                    <img src="/images/icon-close.svg" alt="close button" />
                </div>
            </div>

            <div className="m-auto">
                <img src={imgSrc} alt="RULES" />
            </div>
        </div>
    );
};

const getRulesImgURL = (gameMode) => {
    switch (gameMode) {
        case 'easy':
            return '/images/image-rules.svg';
        case 'hard':
            return '/images/image-rules-bonus.svg';
        default:
            return null;
    }
};

const Rules = () => {
    const [showModal, setShowModal] = useState(false);

    const handleChange = () => {
        setShowModal(true);
    };

    const { gameMode } = useContext(GameDataContext);

    return (
        <div className={`transition ${gameMode ? 'opacity-100' : 'opacity-0'}`}>
            <RulesModal showModal={showModal} setShowModal={setShowModal} imgSrc={getRulesImgURL(gameMode)} />
            <div className="container-responsive mx-auto mt-5 flex justify-center tablet:justify-end mb-4 ">
                <button
                    type="button"
                    onClick={handleChange}
                    className={`px-8 py-1.5 border-2 transform border-color-default transition tracking-widest hover:bg-white hover:text-neutral-dark rounded-lg ${
                        showModal ? 'scale-0' : 'scale-100'
                    }`}
                >
                    RULES
                </button>
            </div>
        </div>
    );
};

export default Rules;
