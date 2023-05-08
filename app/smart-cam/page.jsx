'use client';

import { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Webcam from 'react-webcam';

function SmartCam() {
	const [model, setModel] = useState();

	async function loadModel() {
		try {
			const model = await cocoSsd.load();
			setModel(model);
			console.log('set loaded Model');
		} catch (err) {
			console.log(err);
			console.log('failed load model');
		}
	}

	useEffect(() => {
		tf.ready().then(() => {
			loadModel();
		});
	}, []);

	return <div>SmartCam Page</div>;
}
export default SmartCam;
