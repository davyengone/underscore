var _ = {};

(function(){
	_.identity = function (item){
		return item;
	}


	_.first = function(array, n){
		return (n || n >= 0) ? array.slice(0,n): array[0];
	}


	_.last = function(array, n){
		if(n === 0) return array.slice(0,0);

		if(n > array.length) return array.slice();

		if (n >= 0) {
			return array.slice(n - 1);
		}

		return array[array.length - 1];
	}

	_.each = function(collection, iterator){
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {
				iterator(collection[i], i, collection);
			}
		}
		else{
			for(var key in collection){
				iterator(collection[key], key, collection);
			}
		}
	}

	_.indexOf = function(collection, target){
		var index = 0, result = -1;
		_.each(collection, function(item){
			if (item === target && result === -1) {
				result = index;
			}
			index++;
		});

		return result;
	}


	_.filter = function(collection, iterator){
		var results = [];

		_.each(collection, function(item){
			if(iterator(item)){
				results.push(item);
			}
		});
		
		return results;
	}

	_.reject = function(collection, iterator){
		return _.filter(collection, function(item){
			return !iterator(item);
		});
	}

	_.uniq = function(collection){
		var results = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

		results[0] = collection[0];
		for (var i = 1; i < collection.length; i++) {
			var item = collection[i], found = false;
			for (var k = 0; k < results.length; k++) {
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


	_.map = function(collection, iterator){
		var results = [];
		_.each(collection, function(item){
			results.push(iterator(item));
		});
		return results;
	}

	_.pluck = function(collection, key){
		return _.map(collection, function(item){
			return item[key];
		});
	}

	_.invoke = function(collection, iteratorOrKey){
		return _.map(collection, function(item){
			if ("function" === typeof iteratorOrKey) {
				return iteratorOrKey.call(item);
			}
			else{
				return item[iteratorOrKey]();
			}
		});
	}

	_.reduce = function(collection, iterator, accumulator){
	 	_.each(collection, function(item){
	 		accumulator = iterator(accumulator, item);
	 	});

	 	return accumulator;
	}

	_.contains = function(collection, target){
		var found = false;
		_.each(collection, function(item){
			if (item === target) {
				found = true;
			}
		});

		return found;
	}

}(this))