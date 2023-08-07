
	export const identity = function (item){
		return item;
	}

	export const first = function(array, n){
		return (n || n >= 0) ? array.slice(0,n): array[0];
	}

	export const last = function(array, n){
		if(n === 0) return array.slice(0,0);

		if(n > array.length) return array.slice();

		if (n >= 0) {
			return array.slice(n - 1);
		}

		return array[array.length - 1];
	}

	export const each = function(collection, iterator){
		if (Array.isArray(collection)) {
			for (let i = 0; i < collection.length; i++) {
				iterator(collection[i], i, collection);
			}
		}
		else{
			for(let key in collection){
				iterator(collection[key], key, collection);
			}
		}
	}

	export const indexOf = function(collection, target){
		let index = 0, result = -1;
		each(collection, function(item){
			if (item === target && result === -1) {
				result = index;
			}
			index++;
		});

		return result;
	}


	export const filter = function(collection, iterator){
		const results = [];

		each(collection, function(item){
			if(iterator(item)){
				results.push(item);
			}
		});
		
		return results;
	}

	export const reject = function(collection, iterator){
		return filter(collection, function(item){
			return !iterator(item);
		});
	}

	export const uniq = function(collection){
		const results = [];

		results[0] = collection[0];
		for (let i = 1; i < collection.length; i++) {
			let item = collection[i], found = false;
			for (let k = 0; k < results.length; k++) {
				if (results[k] === item) {
					found = true;
					break;
				}
			};

			if (!found) {
				results.push(item);
			}
		};

		return results;
	}


	export const map = function(collection, iterator){
		const results = [];
		each(collection, function(item){
			results.push(iterator(item));
		});
		return results;
	}

	export const pluck = function(collection, key){
		return map(collection, function(item){
			return item[key];
		});
	}

	export const invoke = function(collection, iteratorOrKey){
		return map(collection, function(item){
			if ("function" === typeof iteratorOrKey) {
				return iteratorOrKey.call(item);
			}
			else{
				return item[iteratorOrKey]();
			}
		});
	}

	export const reduce = function(collection, iterator, accumulator){
	 	each(collection, function(item){
	 		accumulator = iterator(accumulator, item);
	 	});

	 	return accumulator;
	}

	export const contains = function(collection, target){
		let found = false;
		each(collection, function(item){
			if (item === target) {
				found = true;
			}
		});

		return found;
	}
