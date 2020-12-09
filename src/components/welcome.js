import React from 'react';
import { Link} from "react-router-dom";
export default () => <div>Welcome <Link to={{ pathname: `signin`}}>Let's Sign In</Link></div>;
