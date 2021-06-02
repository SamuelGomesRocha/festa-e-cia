import React from 'react';
import {StackRouter} from 'react-navigation';
import { PIN } from '../pages/PIN';

export const SingIn = StackRouter({
	SingIn:{
		screen:PIN,
		navigationOptions:{
			title:"Login"
		}
	}
})