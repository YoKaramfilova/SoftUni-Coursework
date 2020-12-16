function charityCampaign(days, bakers, cakes, waffles, pancakes){
    let cakePrice = 45;
    let wafflePrice = 5.8;
    let pancakePrice = 3.2;
    let bakerContrubuiton = (Number(cakes) * cakePrice) + (Number(waffles) * wafflePrice) + (Number(pancakes) * pancakePrice);
    let earnings = Number(days) * bakerContrubuiton * Number(bakers);
    let donation = earnings - (earnings / 8);
    console.log(donation);
}
charityCampaign('131', '5', '9', '33', '46');