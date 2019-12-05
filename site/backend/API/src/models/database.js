import {connect} from 'mongoose';

const connectDb = () => {
    return connect(`mongodb://localhost:27017/e-commerce-phet`,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    });
}

export default connectDb;