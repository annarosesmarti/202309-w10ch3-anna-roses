import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a PingController", () => {
  describe("When it receives a response", () => {
    const pingController = new PingController();
    const mockStatus = jest.fn().mockReturnValue({ json: jest.fn() });

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: mockStatus,
      json: jest.fn(),
    };

    test("Then it should call its method status with 200", () => {
      const expectStatusCode = 200;

      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectStatusCode);
    });

    test("Then it should call its method json with a '🏓' message", () => {
      const expectedMessage = { message: "🏓" };

      pingController.getPong(req as Request, res as Response);

      expect(res.status(200).json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
