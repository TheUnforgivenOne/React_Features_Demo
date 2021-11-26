import express from 'express';
import serverRenderer from '../src/serverRenderer';

const app = express();
const PORT = 8000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static('../public'));
app.use(serverRenderer());
