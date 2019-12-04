it("should handle errors in loadProfile 1", () => {
  spyOn(component["userSettingsService"], "getEntity").and.returnValue(
    of({
      err: "test error"
    })
  );
  let callbackSpy = jasmine.createSpy();

  component.loadProfile(callbackSpy);

  expect(callbackSpy).toHaveBeenCalledWith({}, undefined);
});
