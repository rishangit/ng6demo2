import { TestBed, inject } from '@angular/core/testing';
import { HttpErrorHandlerService } from './http-error-handler.service';
describe('HttpErrorHandlerService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [HttpErrorHandlerService]
        });
    });
    it('should be created', inject([HttpErrorHandlerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=http-error-handler.service.spec.js.map