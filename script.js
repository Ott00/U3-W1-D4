var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Clothes = /** @class */ (function () {
    function Clothes(_id, _codProd, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codProd = _codProd;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
        this.prezzoIvaInclusa = _prezzoIvaInclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Clothes.prototype.getSaldoCapo = function () {
        return this.prezzoIvaInclusa * (this.saldo / 100);
    };
    Clothes.prototype.getAcquistoCapo = function () {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    };
    return Clothes;
}());
var apiUrl = "https://mocki.io/v1/513abb31-db68-4b50-93d3-865ea73f06aa";
var getClothesData = function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, counter_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    counter_1 = 1;
                    data.forEach(function (element) {
                        var clothes = new Clothes(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
                        console.log("\n      Capo ".concat(counter_1++, ": ").concat(clothes.capo.charAt(0).toUpperCase() + clothes.capo.substring(1), "\n      Prezzo pieno:  ").concat(clothes.prezzoIvaInclusa.toFixed(2), "\n      Prezzo scontato:  ").concat(clothes.getAcquistoCapo().toFixed(2), "\n      Sconto: ").concat(clothes.saldo, "%\n      "));
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
getClothesData();
