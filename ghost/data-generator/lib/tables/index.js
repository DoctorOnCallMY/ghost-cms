module.exports = {
    PostsImporter: require('./posts'),
    NewslettersImporter: require('./newsletters'),
    UsersImporter: require('./users'),
    PostsAuthorsImporter: require('./posts-authors'),
    TagsImporter: require('./tags'),
    PostsTagsImporter: require('./posts-tags'),
    ProductsImporter: require('./products'),
    MembersImporter: require('./members'),
    BenefitsImporter: require('./benefits'),
    ProductsBenefitsImporter: require('./products-benefits'),
    MembersProductsImporter: require('./members-products'),
    PostsProductsImporter: require('./posts-products'),
    MembersNewslettersImporter: require('./members-newsletters'),
    MembersCreatedEventsImporter: require('./members-created-events'),
    MembersLoginEventsImporter: require('./members-login-events'),
    MembersStatusEventsImporter: require('./members-status-events'),
    StripeProductsImporter: require('./stripe-products'),
    StripePricesImporter: require('./stripe-prices'),
    SubscriptionsImporter: require('./subscriptions'),
    MembersStripeCustomersImporter: require('./members-stripe-customers'),
    MembersStripeCustomersSubscriptionsImporter: require('./members-stripe-customers-subscriptions'),
    MembersPaidSubscriptionEventsImporter: require('./members-paid-subscription-events'),
    MembersSubscriptionCreatedEventsImporter: require('./members-subscription-created-events'),
    MembersSubscribeEventsImporter: require('./members-subscribe-events'),
    MentionsImporter: require('./mentions')
};
