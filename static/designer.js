$(function() {

	function DndInitialization() {

        var self = this;

        this.containerSelector = '#container';
        this.inter = 0;

        this.makeParentComponentsDraggable();

    	$(self.containerSelector).on("drop", function (e) {
    		self.onDrop(e);
    	})

    	$(self.containerSelector).on("dragover", function (e) {
    		self.onOver(e);
    	})

    	$(self.containerSelector).on("dragenter", function (e) {
    		self.onEnter(e);
    	})

    }

    DndInitialization.prototype = {
    	onDrop: function() {
    		console.log('onDrop', window.parent.dndData);
    	},

    	onOver: function() {
    		console.log('onOver');
    	},

    	onEnter: function() {
    		console.log('onEnter');
    	},

    	makeParentComponentsDraggable: function() {
    		var self = this;
    		var components = $(window.parent.document, window.parent.document).find('.control-elem');

    		components.each(function(n) {
    			$(this).attr("draggable", true);
    			$(this).on("dragstart", function (e) {
	        		e.stopPropagation();
	        	});

	        	$(this).on("dragend", function (e) {
	        		e.preventDefault();
    				var elems = new ElemGenerator(window.parent.dndData).createElement();
    				$(self.containerSelector).append(elems);
	        	});
    		});
       	}
    }

    function ElemGenerator(controller) {
    	this.controller = controller;
    }

    ElemGenerator.prototype = {

    	setAttribute: function(attr) {
    		console.log(attr);
    		if(attr.isHTML) {
    			this.elem.html(attr.value);
    		}
    	},

    	createElement: function() {
            var docCtrl = $('[id="'+ this.controller._id + '"]');//寻找DOM中是否已经存在元素
            this.elem = docCtrl.length > 0 ? docCtrl : $(document.createElement(this.controller.tag));//虚拟出一个元素

            for (var i = 0; i < this.controller.attrs.length; i++) {
            	this.setAttribute(this.controller.attrs[i]);
            };

            return this.elem;
    	}

    }

    setTimeout(function() {
	    new DndInitialization();
    }, 2000);
});