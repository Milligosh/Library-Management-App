import chaiHTTP from "chai-http";
import chai from "chai";
import { StatusCodes } from "../../../helpers/statusCodes";
import Sinon from "sinon";
import sinonChai from "sinon-chai";
import db from "../../../config/database";

chai.use(chaiHTTP);
chai.use(sinonChai);
const expect = chai.expect;
const prefix = "/api/v1/users";

describe("users", () => {
    afterEach(()=>{
        Sinon.restore()
    })
    // it('should create a user successfully',async ()=>{
    //     Sinon.stub(db,'oneOrNone'.OnFirstCall())
    // })
});
