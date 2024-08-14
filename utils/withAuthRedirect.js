import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuthRedirect = (WrappedComponent) => {
  return function AuthRedirectWrapper(props) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === 'authenticated') {
        router.replace('/dashboard'); // Redirect to homepage or any other page
      }
    }, [status, router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
