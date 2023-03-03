import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col space-y-4 px-4 pt-2 md:px-16">
          <Link
            href="https://chrome.google.com/webstore/detail/conch-ai/namibaeakmnknolcnomfdhklhkabkchl?hl=en&authuser=0"
            className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none"
          >
            <Google className="h-4" />
            <p>Chrome Extension</p>
          </Link>
        </div>
        <div className="flex flex-col  px-4 md:px-16">
          <Link
            className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none"
            href="/sign-up"
          >
            <p>Check Your Paper</p>
          </Link>
        </div>
        <div className="flex flex-col  px-4 md:px-16">
          <Link
            className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none"
            href="/upgrade"
          >
            <p>Pricing</p>
          </Link>
        </div>
        <div className="flex flex-col  px-4 md:px-16">
          <Link
            className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none"
            href="/sign-up"
          >
            <p>Sign Up</p>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center border-b  border-gray-200 bg-white py-8 px-4  text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({
      showSignInModal,
      setShowSignInModal,
      SignInModal: SignInModalCallback,
    }),
    [showSignInModal, setShowSignInModal, SignInModalCallback],
  );
}
