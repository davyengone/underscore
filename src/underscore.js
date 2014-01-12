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
		// var results = [];

		// _.each(collection,function(item){
		// 	if (!iterator(item)) {
		// 		results.push(item);
		// 	}
		// });
		// return results;


		return _.filter(collection, function(item){
			return !iterator(item);
		});
	}

}(this))