Template.body.onCreated(function(){
    this.tab = new ReactiveVar("aboutus");
    this.side = new ReactiveVar(0);
    window.popup = new ReactiveVar("confirm");
    $('#datetimepicker').datepicker();
    window.orders = new Mongo.Collection();
    window.orders.insert({
        name : "",
        amount: 0
    });
    Session.set("message", "Submitted! Come by in about 10 minutes and we'll have your order ready!")
});

Template.body.helpers({
    tab: function(){
        return Template.instance().tab.get();
    },
    gettab: function(){
        if(Template.instance().side.get() >0){
            return "Bakery"
        }
        else if(Template.instance().side.get() <0){
            return "Restaurant";
        }
        else{
            return "Home";
        }
    },
    popup : function(){
        return window.popup.get();
    },
    bread: function(){
        return Bakery.find();
    },
    getdata : function(){

        return Session.get("data");
    },
    ontop : function(){

        return Template.instance().side.get() >0;
    },
    onmid : function(){

        return Template.instance().side.get() == 0;
    },
    onbottom : function(){

        return Template.instance().side.get() < 0;
    },
    order: function(){
        return window.orders.find();
    }
});

Template.salads.helpers({
    salads : function(){
        return Menu.find({type: "salad"});
    },
});

Template.entrees.helpers({
    entrees : function(){
        return Menu.find({type: "entree"});
    },
});

Template.kids.helpers({
    kids : function(){
        return Menu.find({type: "kids"});
    }
});

Template.reviews.helpers({
    reviews : function(){
        return Reviews.find({});
    }
});



