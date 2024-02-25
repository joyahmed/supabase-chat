const ChatHeader = lazy(() => import('@/components/ChatHeader'));
import { supabaseServer } from '@/lib/supabase/server';
import React, { lazy } from 'react';

const Main = async () => {
	const supabase = supabaseServer();

	const { data } = await supabase.auth.getSession();

	console.log(data.session?.user);

	return (
		<div className='max-w-3xl mx-auto md:py-10 h-screen'>
			<div className='h-full border roudned-md'>
				<ChatHeader {...{ user: data.session?.user }} />
			</div>
		</div>
	);
};

export default Main;
