class Negociacao {

	constructor(data, quantidade, valor) {
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);
	}

	// Metodos sao funções dentro de uma classe
		get volume() {
			return this._quantidade * this._valor;
		}

		get data() {
			//return this._data;
			return new Date(this._data.getTime());
		}

		get quantidade() {
			return this._quantidade;
		}

		get valor() {
			return this._valor;
		}
}