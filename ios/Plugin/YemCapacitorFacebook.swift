import Foundation

@objc public class YemCapacitorFacebook: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
