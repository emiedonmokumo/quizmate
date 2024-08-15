import { useSession } from 'next-auth/react';
import { redirect,  } from 'next/navigation';
import { useEffect } from 'react';

const withAuthRedirect = (WrappedComponent) => {
  return function AuthRedirectWrapper(props) {
    const { data: session, } = useSession();

    useEffect(()=>{
      if(session?.user) redirect('/dashboard')
  }, [session])

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
