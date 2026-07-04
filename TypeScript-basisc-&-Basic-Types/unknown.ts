function process(val: unknown) { // any, unknown. Any Lets you do anything with the value, Unknown Lets you do nothing with the value until you check the type of the value.

    if (typeof val === "object" && val !== null && "log" in val && typeof val.log === "function") {
        val.log();
    }
}
