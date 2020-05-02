import * as request from 'supertest';
import {app} from '@/app/app';

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", async () => {
        const result = await request(app).get("/");
        expect(result.text).toEqual("hello");
        expect(result.ok).toEqual(true);
    });
});
