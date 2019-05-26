import { init } from '@rematch/core';
import { createLogicMiddleware } from 'redux-logic';
import rematchLogicPlugin from 'rematch-logic';

// Locals
import * as models from '~/models';

const logicMiddleware = createLogicMiddleware([], {});

const store = init({
	models,
	plugins: [rematchLogicPlugin(logicMiddleware)],
	redux: {
		middlewares: [logicMiddleware]
	}
});
export default store;
